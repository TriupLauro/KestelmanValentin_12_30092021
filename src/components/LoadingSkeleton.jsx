import {Component} from "react";

/**
 * The loading skeleton of the graphical interface while the data is loading
 * Not used anymore
 * @component
 */
class LoadingSkeleton extends Component {
    render() {
        return (
            <div className="mt-t-dboard ml-l-dboard animate-pulse">
                <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                <div className="bg-subduedw-nutri-bg h-nutri-bg"> </div>
                <div className="flex">
                    <div>
                        <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                        <div className="flex">
                            <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                            <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                            <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                        <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                        <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                        <div className="bg-subdued w-nutri-bg h-nutri-bg"> </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoadingSkeleton