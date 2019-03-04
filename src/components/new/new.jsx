import React from "react";

class New extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            visible: false

        }
    }
    render() {
        const {item} = this.props;
        const {index} = this.props;
        return(
            <div className={'news'} key={index}>
                <h2 className={'title'}>{item.title}</h2>
                <div className={'desk'}>{item.descr}</div>
                <a href={"#"} className={index}  onClick={e => this.handleClick(e)}>

                    {this.state.visible ? 'Cкрыть' : 'Подробнее'}
                </a>
                {this.state.visible ? <div className={'news__full'}>{item.more}</div> : null }
            </div>
        );
    }
    handleClick(e) {
        e.preventDefault();
        console.log();
        console.log(this.state.visible);
        this.setState({
            visible: !this.state.visible
        });
    }
}

export default New;