export default function MapSection() {
    return (
      <section id="MapSection" className="w-full h-[450px] overflow-hidden group mb-20">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15869.814665441258!2d80.22716449908783!3d6.069392699495757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1717952ca850b%3A0xb94d15a46bb23af3!2sRuhunu%20Hospital!5e0!3m2!1sen!2slk!4v1708364253654!5m2!1sen!2slk" 
            width="100%" 
            height="450" 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}>
        </iframe>

      </section>
    );
  }