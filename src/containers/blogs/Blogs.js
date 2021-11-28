import React, {Component} from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";
import Button from "../../components/button/Button";

class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs:[]
        }
    }

    componentDidMount() {
        fetch("https://blog.andrew.ac/wp-json/wp/v2/posts?per_page=3").then(res=>res.json()).then(
            result=>{
                this.setState({blogs:result})
            }
        ).catch(error=>{
            console.log(error)
        })
    }

    render() {
        const blogs = this.state.blogs;
        return (
            <Fade bottom duration={1000} distance="20px">
                <div className="main" id="blogs">
                    <div className="blog-header">
                        <h1 className="blog-header-text">{blogSection.title}</h1>
                        <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
                    </div>
                    <div className="blog-main-div">
                        <div className="blog-text-div">
                            {blogs.map(blog => {
                                return (
                                    <BlogCard
                                        blog={{
                                            url: blog.link,
                                            // image: blog.image,
                                            title: blog.title.rendered,
                                            description: blog.excerpt.rendered
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <Button text={"More Blog Post"} className="project-button" href="https://blog.andrew.ac" newTab={true} />
                </div>
            </Fade>
        );
    }
}

export default Blogs;
