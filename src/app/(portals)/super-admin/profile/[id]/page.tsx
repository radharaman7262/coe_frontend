import ProfilePage from '@/app/(portals)/profile/[id]/Profilepage';

const SuperAdminCheckingProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return <ProfilePage id={id} portal='superAdminChecking' />;
};

export default SuperAdminCheckingProfile;
