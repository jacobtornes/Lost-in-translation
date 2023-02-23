import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({translations}) => {
    const translationlist = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + '-' + translation} translation= {translation}/>
        ) 
    return (
        <section>
            <h4>Your translation history</h4>

            {translationlist.length === 0 && <p>You have no translations yet</p>}

            <ul>
                {translationlist.slice(Math.max(translationlist.length - 10, 0))}
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory