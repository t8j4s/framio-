import './framer/styles.css'

import FeatureCardFramerComponent from './framer/feature-card'
import CtaCardFramerComponent from './framer/cta-card'
import SectionTitleFramerComponent from './framer/section-title'
import FaqListFramerComponent from './framer/faq-list'
import CommentCardFramerComponent from './framer/comment-card'
import SectionNameFramerComponent from './framer/section-name'
import StatsFramerComponent from './framer/stats'
import AboutTextFramerComponent from './framer/about-text'
import YoutubeVideoFramerComponent from './framer/youtube-video'
import ServiceCardFramerComponent from './framer/service-card'
import BlogCardFramerComponent from './framer/blog-card'
import PricingCardFramerComponent from './framer/pricing-card'
import IntroCallCardFramerComponent from './framer/intro-call-card'
import TrustCardFramerComponent from './framer/trust-card'
import ButtonFramerComponent from './framer/button/button'
import RecentWorkCardFramerComponent from './framer/recent-work-card'
import CreatorsProblemCardFramerComponent from './framer/creators-problem-card'
import IconFramerComponent from './framer/icon'
import ParticlesFramerComponent from './framer/particles'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(252,_252,_252)]'>
      <FeatureCardFramerComponent.Responsive
        YRK4OykBe={"500+ Videos Delivered "}
      />
      <CtaCardFramerComponent.Responsive/>
      <SectionTitleFramerComponent.Responsive
        E_rWjEvLZ={"What We Do Best"}
        EzsIz6zOm={"Services"}
        SFLyMyOrS={"We craft scroll-stopping edits that keep your audience hooked and your content looking top-tier."}
      />
      <FaqListFramerComponent.Responsive/>
      <CommentCardFramerComponent.Responsive
        YUzF8O6Eo={"@mark_locus"}
        cK8coHtT3={"This edit boosted my retention rate by 35%!"}
      />
      <SectionNameFramerComponent.Responsive
        LSDJBRwcs={"About"}
      />
      <StatsFramerComponent.Responsive/>
      <AboutTextFramerComponent.Responsive/>
      <YoutubeVideoFramerComponent.Responsive
        XPoFLgbNt={"https://www.youtube.com/watch?v=POxCGzmkOmU"}
        cOv1RTy21={true}
        d3z5agfpn={false}
      />
      <ServiceCardFramerComponent.Responsive
        CQRuUqzNq={"We turn raw clips into high-retention, caption-packed vertical videos that pop on Reels, Shorts, and TikTok. Great for content repurposing and explosive growth."}
        ExkEVtJ0U={"Youtube Shorts Editing"}
        beTztt3Mx={"Snappy Pacing "}
        egjS7JFVG={true}
        fogtJqlnj={"Subtitled"}
        kblgZJZ2C={true}
        uAIk9nD9r={"Viral-Ready"}
        wmeEbX7ah={true}
      />
      <BlogCardFramerComponent.Responsive
        moBYuYD5W={"How YouTube Creators Can Build a Personal Brand Website "}
        yl_umE0xn={"You’re more than just a youtube channel — you’re a brand yourself."}
      />
      <PricingCardFramerComponent.Responsive
        DUuhZ9doE={"???"}
        TFT4n63a9={"Title, Thumbnail, and Retention tips"}
        TRFXAAxBH={"One edit = Multi-channel assets"}
        XAIMf2MDJ={"Choose from 10 to 40+ Video Edits"}
        cJHlvH4ku={"Shorts, Reels, Long-form, Podcasts"}
        es6_t4icx={"Custom Plan"}
        jDFLEi4rM={"24h / 48h / 72h Delivery"}
        p5sovG5vP={true}
        puW2b0gfP={"For growing creators who post 28–40+ videos/month"}
      />
      <IntroCallCardFramerComponent.Responsive/>
      <TrustCardFramerComponent.Responsive
        REzw5nRG9={"Trusted By 100+ Creators"}
      />
      <ButtonFramerComponent.Responsive
        QPXgBsk7h={"Book a Call"}
      />
      <RecentWorkCardFramerComponent.Responsive
        PXQrGtp0u={"Doubling your lead gen agency comes down to one simple system and that's exactly what I learned working with them."}
        R9iUk6IU2={"3x Booked Calls"}
        duYJF5x59={"Scaled to $57K/month"}
        ptvBvhffK={"https://youtu.be/Wx6Te3yKcgY?si=DdaUc2gZdi8-ysIi"}
        usWfYGYvL={"Lead Gen Jay"}
      />
      <CreatorsProblemCardFramerComponent.Responsive
        FHwabn6xm={true}
        KnZ6xq5DS={"Captions are a pain to add."}
        Lyq42DZj7={true}
        NHKkcZcZm={"I hate editing. I just want to record."}
        XiPhSrdpz={"I miss uploads trying to finish videos."}
        dvWO0uvz8={true}
        kv82VIFAD={"My videos don’t look pro enough."}
        rYzjSxS4V={true}
        s3odgLfPM={"Editing takes me forever."}
        up5ghddQX={true}
      />
      <IconFramerComponent.Responsive
        JzqFxkxL1={"rgb(255, 81, 0)"}
      />
      <ParticlesFramerComponent.Responsive/>
    </div>
  );
};