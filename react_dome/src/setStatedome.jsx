import React from 'react';
// 修改state
export default class SetstateDome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    async changeSetState () {
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log(this.state.count)
        // })

        await this.setStateSync({ count: this.state.count + 1 })
        console.log(this.state.count)
    }

    setStateSync (state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    render () {
        const { count } = this.state;

        return (
            <div>
                <p>setState:{count}</p>
                <button onClick={this.changeSetState.bind(this)} >修改setState</button>
            </div>
        )
    }
}