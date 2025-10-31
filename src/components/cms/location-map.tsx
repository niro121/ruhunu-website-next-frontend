type LocationMapProps = {
  lat: string;
  lng: string;
};

export default function LocationMap({ lat, lng }: LocationMapProps) {
    const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

    return (
        <div className="w-full h-[430px] overflow-hidden shadow-lg">
            <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
