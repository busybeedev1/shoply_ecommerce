import "./scrollingBanner.css";

const ScrollingBanner = () => {
    return (
        <div className="scroll-wrapper">

            <div className="scroll-content">

                <span>
                    Free Shipping On Orders Over ₦50,000
                </span>

                <span>
                    New Products Added Weekly
                </span>

                <span>
                    Secure Payment Available
                </span>

                <span>
                    Shop The Latest Collections
                </span>


                {/* duplicate for smooth looping */}
                <span>
                    Free Shipping On Orders Over ₦50,000
                </span>

                <span>
                    New Products Added Weekly
                </span>

                <span>
                    Secure Payment Available
                </span>

            </div>

        </div>
    );
};

export default ScrollingBanner;