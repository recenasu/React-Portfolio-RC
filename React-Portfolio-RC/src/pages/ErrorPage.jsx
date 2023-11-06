import { useRouteError } from 'react-router-dom';

// Define and export error function.
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

return (
    <div id="error-page">
        <h1>Something went wrong!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
);
};
