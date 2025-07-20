import "./faq.css";
import pQuestion from "../images/projectQuestion.jpg";
import eQuestion from "../images/everyQuestion.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export function Faq() {
    const [questions, setQuestions] = useState({
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
        q8: false,
        q9: false,
        q10: false,
    });

    const toggleQuestion = (key) => {
        setQuestions((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="faq">
            <div className="faq-header">
                <h1>Faq's<p>Home / Faq</p></h1>
            </div>
            <h1 className="faq-title">Every Question Answered</h1>
            <div className="e-question">
                <div className="ep-questions">
                    {[
                        { key: "q1", title: "What is ArtifyMe?" },
                        { key: "q2", title: "How do I get started with ArtifyMe?" },
                        { key: "q3", title: "What types of art can I create?" },
                        { key: "q4", title: "Can I collaborate with other artists?" },
                        { key: "q5", title: "How does ArtifyMe handle copyright?" },
                    ].map((question) => (
                        <div className="ep-q" key={question.key}>
                            <p
                                className="q-title"
                                onClick={() => toggleQuestion(question.key)}
                            >
                                {question.title} <IoIosArrowForward />
                            </p>
                            {questions[question.key] && (
                                <p className="q-content">
                                    {question.key === "q1" && "ArtifyMe is an innovative platform for artists to create, share, and collaborate on art projects. We provide tools and resources to help you bring your artistic vision to life."}
                                    {question.key === "q2" && "To get started, simply sign up on our website and explore the various features available. You can create your profile, start a new project, or join existing ones."}
                                    {question.key === "q3" && "ArtifyMe supports a wide range of art forms including digital art, traditional painting, sculpture, and more. You can explore our platform to find the tools and resources for your preferred art form."}
                                    {question.key === "q4" && "Yes, ArtifyMe allows for collaboration on projects. You can invite other artists to join your project or collaborate on shared projects within the community."}
                                    {question.key === "q5" && "ArtifyMe respects the intellectual property of artists. All original works are protected by copyright, and we provide features to help manage and protect your creative content."}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="ep-q-img">
                    <img src={eQuestion} alt="Every Question" />
                </div>
            </div>

            <h1 className="faq-title">Project Related Questions</h1>
            <div className="p-question">
                <div className="ep-q-img">
                    <img src={pQuestion} alt="Project Question" />
                </div>
                <div className="ep-questions">
                    {[
                        { key: "q6", title: "What is the typical timeline for a project?" },
                        { key: "q7", title: "Can I make changes to my project after it's started?" },
                        { key: "q8", title: "What happens once my project is completed?" },
                        { key: "q9", title: "Do you offer support after project completion?" },
                        { key: "q10", title: "How do you address unexpected issues during a project?" },
                    ].map((question) => (
                        <div className="ep-q" key={question.key}>
                            <p
                                className="q-title"
                                onClick={() => toggleQuestion(question.key)}
                            >
                                {question.title} <IoIosArrowForward />
                            </p>
                            {questions[question.key] && (
                                <p className="q-content">
                                    {question.key === "q6" && "The timeline for a project varies based on its complexity and scope. Generally, you can expect to complete a standard project within a few weeks to a few months."}
                                    {question.key === "q7" && "Yes, you can make changes to your project even after it's started. We encourage collaboration and feedback to ensure the final outcome meets your expectations."}
                                    {question.key === "q8" && "Once your project is completed, you can showcase it in your portfolio or on our platform. You may also receive feedback from other artists and users."}
                                    {question.key === "q9" && "We offer post-project support to help you with any issues or questions you may have. Our team is available to assist with any concerns after your project is complete."}
                                    {question.key === "q10" && "If unexpected issues arise during a project, our team will work with you to address them promptly. We strive to ensure that your project stays on track and meets your goals."}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
