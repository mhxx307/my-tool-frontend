import { useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import VideoDownloadPage from './pages/VideoDownloadPage';
import ImageDownload from './pages/ImageDownload';
import ShortenUrlPage from './pages/ShortenUrlPage';
import UrlStatistics from './pages/UrlStatisticsPage';

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
    {
        path: '/shorten-url',
        index: true,
        element: (
            <MainLayout>
                <ShortenUrlPage />
            </MainLayout>
        ),
    },
    {
        path: '/statistics',
        index: true,
        element: (
            <MainLayout>
                <UrlStatistics />
            </MainLayout>
        ),
    },
];

export function useRouteElements() {
    const routesElements = useRoutes(routes);

    return routesElements;
}
