import React,{useEffect, useRef} from 'react'

import Typical from 'react-typical'
import x from './App.module.css'
import textbook_pic from './images/textbook_pic.jpg'
import python_logo from './images/python_logo.svg'
import play_snake_game from './snake_game.js'
import play_python_code from './python_code'


function App3() {
    let paper_1_link='https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/computer-science/2017/Exam-materials/4CP0_01_que_20190521.pdf'
    let paper_2_link='https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/computer-science/2017/Exam-materials/4CP0_02_que_20190608.pdf'
    ////////////////////////
    const canvas_ref=useRef(null)
    const ctx_ref=useRef(null)
    /////////////////////////////
    const code_canvas_ref=useRef(null)
    const code_ctx_ref=useRef(null)

    useEffect(()=>{
        const canvas=canvas_ref.current
        const ctx=canvas.getContext('2d')
        ctx_ref.current=ctx
        ///////////////////////////////////////
        const code_canvas=code_canvas_ref.current
        const code_ctx=code_canvas.getContext('2d')
        code_ctx_ref.current=code_ctx
        //////////////////////////////////////////////
        // setTimeout(play_snake_game,6000,ctx_ref.current,canvas)
        play_python_code(code_ctx_ref.current,code_canvas,ctx_ref.current,canvas)
        //play_snake_game(ctx_ref.current,canvas)
    },[])

    return (
    <>
    <div className={x.first_container}>
        <div className={x.text_container}>
        <h1 className={x.h1_style}>
        Learn <br/>Edexcel <span className={x.igcse}>IGCSE Computer Science</span> 
        <Typical
        steps={['',100,'w',150,'wi',150,'wit',150,'with',150,'with ',150,'with m',150,'with me']}
        loop={1}
        />
        </h1>
        </div>
        <img src={textbook_pic} width='300px' className={x.textbook_pic}/>
    </div>
    <hr style={{backgroundColor:'white'}}></hr>
    <div className={x.second_container}>
        <div className={x.python_text_container}>
            <p className={x.learn_python}>Learn python through building games</p>
        </div>
        <div className={x.python_code_container}>
            <canvas ref={code_canvas_ref} className={x.canvas_element}  height='500px' width='500px'></canvas>
            <img src={python_logo} className={x.python_logo} width='300px'/>
            <canvas ref={canvas_ref} className={x.canvas_element} height='500px' width='500px'></canvas>
        </div>
    </div>
    <hr style={{backgroundColor:'white'}}></hr>
    <div className={x.third_container}>
        <div className={x.overview_text_div}>
            <p className={x.overview_text}>Papers in the exam</p>
        </div>
        <div className={x.table_container}>
            <div className={x.paper_table_container}>
                <div className={x.first_row_of_table}>
                    <h1>Paper</h1>
                </div>
                <div className={x.second_row_of_table}>
                    <div className={x.individual_paper_container}>
                        <p className={`${x.border_down} ${x.row_in_individual_table}`}>Paper 1: Principles of Computer Science</p>
                        <p className={x.row_in_individual_table}>Duration : 2 hours<br/>Marks: 80</p>
                        <p className={`${x.border_up} ${x.row_in_individual_table}`}>In this paper there will be open response and MCQ questions</p>
                        <a className={`${x.border_up} ${x.row_in_individual_table}  ${x.sample_question_link}`}
                        href={paper_1_link} target="_blank" rel="noopener noreferrer">
                            <p>Sample question link</p>
                        </a>
                    </div>
                    <div className={x.individual_paper_container}>
                        <p className={`${x.border_down} ${x.row_in_individual_table}`}>Paper 2: Application of Computational Thinking</p>
                        <p className={x.row_in_individual_table}>Duration : 3 hours<br/>Marks: 80</p>
                        <p className={`${x.border_up} ${x.row_in_individual_table} ${x.paper_2_description}`}>
                        In this paper along with open response and MCQ questions
                            you will have to solve some questions on a computer
                        </p>
                        <a className={`${x.border_up} ${x.row_in_individual_table} ${x.sample_question_link}`} href={paper_2_link}
                        target="_blank" rel="noopener noreferrer">
                            <p>Sample question link</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={x.whatsapp_container}>
        <p className={x.number}>Whatsapp : 01836795507</p>
    </div>
    </>
    )
}
export default App3
