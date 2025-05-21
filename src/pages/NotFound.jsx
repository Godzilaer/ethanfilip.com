import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        document.title = "The Ethan Web - 404 Not Found";
      }, []);

    return (
        <main className="container-fluid text-center" style={{height: "80vh"}}>
            <h1 className="text-center title-main">404 Not Found</h1>
            <p>Oops! This page doesn't exist or couldn't be found. If you're lost, you can <a href="/">return to the home page.</a></p>
        </main> 
    )
}