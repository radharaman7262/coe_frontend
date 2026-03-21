import ProfilePage from '@/app/(portals)/profile/[id]/Profilepage';

const TherpistCheckingProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return <ProfilePage id={id} portal='therapistChecking' />;
};

export default TherpistCheckingProfile;
