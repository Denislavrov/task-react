import React from "react";
import New from '../new/new'

class News extends  React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible : false
        }
    }
    render() {
        const {items} = this.props;
        return items.length === 0 ? <div>NONE!</div> : this.renderContent();
    }

    renderNews() {
        return  this.props.items.map((item, index) => {
            return (
            <New item={item} index={index}/>
            );
        });
    }
    renderContent() {
        return (

            <div>
                {this.renderNews()}
                <p> your have a {this.props.items.length} news!</p>
            </div>
        )
    }
    handleClick(e) {
        e.preventDefault();
        console.log()
        console.log(this.state.visible);
             this.setState({
                 visible: !this.state.visible
             })
    }
}

export default News;