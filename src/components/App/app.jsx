import React from "react";
import News from "../news/news";
import './app.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [
                {
                    title: 'asdasddad',
                    descr: 'asdadasdasd',
                    more: 'alskdlsncjsdkmsdlsdmnjsdlksndvjksdnvdksvndskvjnsdvkjdsnvjkdsvndsnvdsjknvdskv',
                },

                {
                    title: 'asdasddad',
                    descr: 'hhhhhhhhhhh',
                    more: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                },

                {
                    title: 'asdasddad',
                    descr: 'ssssssssss',
                    more: 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
                }
            ]
        }
    }
    render() {

        return (
            <div className={"header"}>
                News<br/>
                <input type={'text'} ref={ (input) => {this.inputNews = input;} } placeholder={'title'}/><br/>
                <input type={'text'} ref={ (input) => {this.inputDescr = input;}} placeholder={'news'}/><br/>
                <input type={'text'} ref={ (input) => {this.inputMore = input;}} placeholder={'more'}/><br/>
                <button onClick={() => this.handleClick()}>add news</button>
                <News items={ this.state.news }/>
            </div>
        );
    }

    handleClick() {
        let {news} = this.state;
        if(this.inputNews.value === '' || this.inputDescr.value === '' || this.inputMore.value === '') {
            return;
        }
        news.push ({
            title: this.inputNews.value,
            descr: this.inputDescr.value,
            more: this.inputMore.value
        });
        this.setState(news);
        this.inputNews.value = '';
        this.inputDescr.value = '';
        this.inputMore.value= '';
    }
}

export default App;