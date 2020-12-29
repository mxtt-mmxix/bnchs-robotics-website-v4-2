import React from 'react'
import VCenter from '../components/VCenter'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Competitions(props) {

    return (
        <DefaultLayout>
            <div className="container-fluid">
                <main>
                    <section>
                        <div className="row min-vh-100">
                            <div className="col d-none d-md-block" style={{ backgroundImage: 'url(img/jpg/robot_start.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }} />
                            <div className="col py-5" style={{ backgroundColor: '#ED1C24' }}>
                                <VCenter>
                                    <h1 className="display-1" style={{ fontFamily: "Arial" }}><i>FIRST</i> Robotics</h1>
                                    <p className="text-small">Content Courtesy of the <i>FIRST</i> Website</p>
                                    <h2>About</h2>
                                    <p>FIRST (For Inspiration and Recognition of Science and Technology) was founded in 1989 to inspire young people's interest and participation in science and technology. Based in Manchester, NH, the 501(c)(3) not-for-profit public charity designs accessible, innovative programs that motivate young people to pursue education and career opportunities in science, technology, engineering, and math, while building self-confidence, knowledge, and life skills.</p>
                                    <p>FIRST is More Than Robots. FIRST participation is proven to encourage students to pursue education and careers in STEM-related fields, inspire them to become leaders and innovators, and enhance their 21<sup>st</sup> century work-life skills.</p>
                                </VCenter>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row min-vh-100">
                            <div className="col py-5" style={{ backgroundColor: '#0066B3' }}>
                                <VCenter>
                                    <h1 className="display-1" style={{ fontFamily: "Arial" }}>Mission</h1>
                                    <p>The mission of <i>FIRST</i>&reg; is to inspire young people to be science and technology leaders and innovators, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.</p>
                                </VCenter>
                            </div>
                            <div className="col d-none d-md-block" style={{ backgroundImage: 'url(img/jpg/robot_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }} />
                        </div>
                    </section>
                </main>
            </div>
        </DefaultLayout>
    )
}