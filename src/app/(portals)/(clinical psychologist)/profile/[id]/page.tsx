import ProfilePage from '@/app/(portals)/profile/[id]/Profilepage';

const ClinicalCheckingProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return <ProfilePage id={id} portal='clinicalChecking' />;
};

export default ClinicalCheckingProfile;
