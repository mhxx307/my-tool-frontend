import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import VideoDownloadPage from './pages/VideoDownloadPage';
import ImageDownload from './pages/ImageDownload';

const routes = [
    {
        path: '/',
        index: true,
        element: (
            <MainLayout>
                <VideoDownloadPage />
            </MainLayout>
        ),
    },
    {
        path: '/image-download',
        index: true,
        element: (
            <MainLayout>
                <ImageDownload />
            </MainLayout>
        ),
    },
];

export function useRouteElements() {
    const routesElements = useRoutes(routes);

    return routesElements;
}
