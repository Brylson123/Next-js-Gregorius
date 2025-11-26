"use client";
import {ChangeEvent, FormEvent, useState} from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTranslations } from 'next-intl';

const ContactForm = () => {
    const t = useTranslations('contact.form');
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value});
    };
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setError("validation-error");
            return;
        }

        setError("");
        setLoading(true);

        emailjs
            .send(
                `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
                {
                    from_name: form.name,
                    to_name: "Paweł Bryła",
                    from_email: form.email,
                    to_email: "biuro@gregorius.pl",
                    message: form.message,
                },
                `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
            )
            .then(
                () => {
                    setLoading(false);
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                    toast.success(t('success'));
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error(t('error'));
                },
            );
    };
    return (
        <form className="flex flex-col gap-8" onSubmit={submitHandler}>
            <label className="flex flex-col">
                <span className="mb-4 font-medium text-gray-800">{t('name')}</span>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={changeHandler}
                    placeholder={t('name')}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-4 font-medium text-gray-800 shadow-md outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 md:px-6"
                />
            </label>
            <label className="flex flex-col">
                <span className="mb-4 font-medium text-gray-800">{t('email')}</span>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={changeHandler}
                    placeholder={t('email')}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-4 font-medium text-gray-800 shadow-md outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 md:px-6"
                />
            </label>

            <label className="flex flex-col">
                <span className="mb-4 font-medium text-gray-800">{t('message')}</span>
                <textarea
                    rows={8}
                    name="message"
                    value={form.message}
                    onChange={changeHandler}
                    placeholder={t('messagePlaceholder')}
                    className="resize-none rounded-lg border border-gray-300 bg-white px-3 py-4 font-medium text-gray-800 shadow-md outline-none placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 md:px-6"
                />
            </label>
            <button
                type="submit"
                className="w-fit rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
                {loading ? t('sending') : t('send')}
            </button>
        </form>


    )
}

export default ContactForm;
