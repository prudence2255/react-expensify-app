import React from 'react';


const Info = (props) => {
    return (
        <div>
            <p>These are the details: {props.info}</p>
        </div>
    )
}
const withAdminWarning = (WrappedComponent) => {
        return (props) => {
            return (
                <div>
                   {props.isAdmin && (
                    <p>This is private info please don't share</p>
                   )
                   }
                    <WrappedComponent {...props}/>
                </div>
            )
        }
}
export default withAdminWarning(Info);
