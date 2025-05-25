import React from 'react'
import extracurriculars from '/src/data/extracurriculars'
import Club from '/src/components/Club'
import Hobby from '/src/components/Hobby'

export default function Extracurriculars() {
    return (
        <main className="container-fluid">
            <h1 className="title-main text-center">Extracurriculars</h1>

            <section id="clubs">
                <h2 className="text-center title-secondary">Clubs</h2>
                <ul className="list-group">
                    {extracurriculars.clubs.map(club => <Club key={club.id} club={club}/>)}
                </ul>
            </section>

            <section id="hobbies">
                <h2 className="text-center title-secondary mt-2">Hobbies</h2>
                <ul className="list-group">
                    {extracurriculars.hobbies.map(hobby => <Hobby key={hobby.id} hobby={hobby}/>)}
                </ul>
            </section>
        </main>
    )
}