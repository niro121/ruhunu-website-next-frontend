import AboutUs from "@/components/home/about-us-section";
import HeroSider from "@/components/home/hero-sider";
import NewsAndArticleNews from "@/components/home/news-and-article-new-section";
import OurServices from "@/components/home/services-section";
import OurTestimonials from "@/components/home/testimonials-section";

export default function Home() {
    return (
        <div>
            <HeroSider/>
            <AboutUs/>
            <OurServices/>
            <OurTestimonials/>
            <NewsAndArticleNews/>
        </div>
    );
}
