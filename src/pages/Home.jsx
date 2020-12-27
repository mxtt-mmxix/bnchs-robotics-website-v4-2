import React, { useContext } from 'react'
import VCenter from '../components/VCenter'
import DefaultLayout from '../layouts/DefaultLayout'
import ContentWithCaption from '../components/ContentWithCaption';
import RContentWithCaption from '../components/RContentWithCaption';
import LAccentBar from '../components/LAccentBar';
import { ThemeContext } from '../AppDelegate';

export default function Home(props) {

    const theme = useContext(ThemeContext)

    const imageSrc = theme.mode === "neon blue" ? "img/svg/bulldog.svg" : "img/svg/bulldog_orange.svg"

    return (
        <DefaultLayout>
            <ContentWithCaption title="The Sentinels" caption="Competitive Robotics Robotics Team" >
                <VCenter>
                    <img src={imageSrc} width="100%" alt="neon bulldog logo" />
                </VCenter>
            </ContentWithCaption>
            <LAccentBar>
                The Sentinels are Benjamin N. Cardozo High School's Robotics Team. We compete in various annual robotics competitions against high schools across the globe, raising awareness for Science, Technology, Engineering, and Mathematics (STEM), along with teaching students aspects behind business and marketing, logistics, and media. We also participate in various community and school events. FRC Team 5599, participates in the annual FIRST® Robotics Competition (FRC). In a six week time span, we raise funds, design, and construct a fully-functional robot.
            </LAccentBar>
            <RContentWithCaption title="Our History" caption="In 2014, the team was awarded the Future Glory Award at the Brunswick Eruption 2014 off-season competition. In 2015, the team took home the Rookie Inspiration Award from the New York City 2015 Regional Competition. In 2017, the team was the leading alliance in finals at the Hudson Valley Rally off-season competition in Yonkers, New York. In 2018, the team played in the quarter-finals in the New York City 2018 Regional Competition on an alliance with specialized school Brooklyn Technical High School and Long Island City High School. At the time Vice-Captain and Director of Marketing, Danielle Louie, was a Dean' s Lists Award semi-finalist. At the 2019 SBPLI Long Island Regional Competition (#2), Nazifa Prapti was a Dean's List Award semi-finalist, and was also awarded the MVP Achievement in recognition of their &quot;Individual excellence, contribution, and achievement&quot; during the competition season. At the New York City 2019 Regional, Nazifa was a Dean's List Award finalist, one of the highest acclaimed awards in the entire FIRST Robotics program. The team placed in the semi-finals during the 2019 Half Hallow Hills Robotics Invitational off-season event. The High School's Robotics team once included an underwater robotics division that participates in the United States Navy's SeaPerch program, a program created by the Massachusetts Institute of Technology and sponsored by Office of Naval Research. The SeaPerch team placed third in the 2017 season, their first time competing in the program. The SeaPerch program was disbanded in 2018.">
                <div className="h-100" style={{ backgroundImage: "url(img/jpg/history.jpg)", backgroundAttachment: 'scroll', backgroundSize: 'cover', backgroundPosition: 'center center' }} />
            </RContentWithCaption>
        </DefaultLayout >
    )
}