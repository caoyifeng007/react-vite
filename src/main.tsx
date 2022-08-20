import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./Clock";
import "./index.css";

// const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement,
// );

// root.render(
//     <React.StrictMode>
//         <Clock />
//     </React.StrictMode>,
// );

function Mailbox(props: any) {
    const unreadMessages = props.unreadMessages;
    const count = 0;
    return (
        <div>
            <h1>Hello!</h1>
            {/* {unreadMessages.length > 0 && (
                <h2>You have {unreadMessages.length} unread messages.</h2>
            )} */}
            {count && <h1>Messages: {count}</h1>}
        </div>
    );
}

const messages: string[] = [];

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(<Mailbox unreadMessages={messages} />);
