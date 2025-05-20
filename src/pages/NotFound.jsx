import { useEffect } from 'react';

export default function NotFound() {
    useEffect(() => {
        document.title = "The Ethan Web - 404 Not Found";
      }, []);

    return (
        <h1>404 Not Found</h1>
    )
}