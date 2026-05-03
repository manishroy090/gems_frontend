
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Modal = ({ children, showModal }: { children: React.ReactNode; showModal: boolean }) => {
    return (
        <div
            className={
                showModal
                    ? "fixed inset-2 z-10 h-full w-full flex items-center justify-center bg-black/60"
                    : "hidden"
            }
            aria-modal="true"
            role="dialog"
        >
            <div>
            </div>
            <div className="w-full max-w-md mx-4 bg-white rounded-2xl shadow-xl p-6">
                <div className='flex justify-end'>
                    <CloseOutlinedIcon />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;