

const styles = {
    wrapper: 'flex flex-col items-center justify-start gap-[1rem] p-[1rem] font-mediumSerif w-[50rem]',
    title: 'my-[2rem] font-bold text-3xl',
    smallField: 'font-bold text-3xl flex',
    fieldTitle: 'w-[10rem]',
    inputField: 'flex flex-1 w-[10rem]',
    inputContainer: 'w-[30rem]'
}


const PostComponent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Add a Post </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Title</span>
                <span className={styles.inputContainer}>
                    <input 
                        type='text'
                        className={styles.inputField}
                        placeholder=''
                    />
                </span>
            </div>

            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Brief</span>
                <span className={styles.inputContainer}>
                    <input 
                        type='text'
                        className={styles.inputField}
                        placeholder=''
                    />
                </span>
            </div>

            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>BannerImage URL</span>
                <span className={styles.inputContainer}>
                    <input 
                        type='text'
                        className={styles.inputField}
                        placeholder=''
                    />
                </span>
            </div>

            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Category</span>
                <span className={styles.inputContainer}>
                    <input 
                        type='text'
                        className={styles.inputField}
                        placeholder=''
                    />
                </span>
            </div>

            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Estimated Read Length (In Minutes)</span>
                <span className={styles.inputContainer}>
                    <input 
                        type='text'
                        className={styles.inputField}
                        placeholder=''
                    />
                </span>
            </div>
            <div className={styles.smallField}>
                <span className={styles.fieldTitle}>Article Text</span>
                <span className={styles.inputContainer}>
                    <textarea 
                        type='text'
                        className={styles.inputField}
                        placeholder=''
                        cols={12}
                    />
                </span>
            </div>
            
        </div>
    )
}

export default PostComponent;