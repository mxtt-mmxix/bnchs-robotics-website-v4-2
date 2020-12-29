import React from 'react'
import VCenter from '../components/VCenter'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Competitions(props) {

    return (
        <DefaultLayout>
            <div className="container-fluid">
                <div className="row min-vh-100">
                    <div className="col d-none d-md-block" style={{ backgroundImage: 'url(img/jpg/robot_start.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center' }} />
                    <div className="col" style={{ backgroundColor: '#ED1C24' }}>
                        <VCenter>
                            <h1 className="display-1" style={{ fontFamily: "Arial" }}><i>FIRST</i> Robotics</h1>
                            <p className="text-small">Content Courtesy of the <i>FIRST</i> Website</p>
                            <h2>Mission</h2>
                            <p>The mission of <i>FIRST</i>&reg; is to inspire young people to be science and technology leaders and innovators, by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.</p>
                        </VCenter>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}