interface GoogleMapProps {
  className?: string
}

export default function GoogleMap({ className = '' }: GoogleMapProps) {
  return (
    <div className={`w-full h-96 rounded-lg overflow-hidden ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.494713938135!2d20.062018176901038!3d50.09574651283939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716457da617f935%3A0x1941138cfc8dd657!2sGregorius.%20Tuleje%20i%20gniazda%20zaworowe!5e0!3m2!1spl!2spl!4v1713427505990!5m2!1spl!2spl"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full rounded-lg"
        title="Lokalizacja firmy GREGORIUS"
      />
    </div>
  )
}

