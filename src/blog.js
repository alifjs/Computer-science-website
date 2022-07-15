import React from 'react'

import x from './blog.module.css'
import syllabus_qp_pic from './images/syllabus_qp_pic.svg'

function Blog() {
    let syllabus_link='https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/computer-science/2017/specification-and-sample-assessments/international-gcse-in-Computer-Science-Specification.pdf'
  return (
    <>
    <div className={x.whole_page_container}>
        <div className={x.blog}>
            <p className={x.title_1}>How to get good at python</p>
            <p className={x.blog_text}>
                To start off, you want to focus on learning :
                <br/>
                <br/>
                <ul className={x.list}>
                    <li>Variables</li>
                    <li>If-else statements</li>
                    <li>For loop</li>
                    <li>While loop</li>
                    <li>Functions</li>
                </ul>
                <br/>
                <a href='https://www.w3schools.com/python/' target="_blank" rel="noopener noreferrer">W3schools</a> and youtube are ideal places to learn these.
                After understanding the fundamentals, you can solve programming problems in <a href='https://www.codewars.com/' target="_blank" rel="noopener noreferrer" >codewars</a>.
                If you are fairly new to programming, it is strongly recommended that you do not skip this step.
                It is hard to develop a strong grasp on the above mentioned programming concepts 
                without solving problems.
                After solving problems in codewars, when you feel comfortable
                with your programming skills, the next step is to find something which is fun.
                Search on the internet for that.(Note : Having fun is important otherwise you may
                quit coding, programming is just as much fun as what you build with it.)
                If you cannot find something fun, you can try pygame.Pygame is a library
                with which you can build awesome games with python.You can learn it from youtube.
            </p>
            <p className={x.title_2}>How to study for IGCSE Computer Science</p>
            <img src={syllabus_qp_pic}></img>
            <p className={`${x.blog_text} ${x.margin_bottom}`}>
                Edexcel asks questions from <span style={{fontWeight:'bold'}}> syllabus statements</span>.
                In the example above, question (d) was asked from statement 1.1.8,question (e) 
                was asked from statement 1.1.2 and question (f) from statement 1.1.4 (the example is not real).This is the idea,
                every single question is linked to a syllabus statement.Therefore, the effective strategy
                is to read the syllabus statements and try to learn the precise concept of every statement.
                One great strategy is to study the previous years' question papers and their answers.
                Here's a <a href={syllabus_link} target="_blank" rel="noopener noreferrer">link</a> of the syllabus.
            </p>
        </div>
    </div>
    </>
  )
}
export default Blog
//Tiempos Headline Medium,sans-serif
