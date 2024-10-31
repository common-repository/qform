import * as events from "events";

const {registerBlockType} = wp.blocks;
const {apiFetch} = wp;
const {useState, useEffect} = wp.element
import axios from 'axios';
import classnames from "classnames";


const {InspectorControls, useBlockProps} = wp.blockEditor;
const {
    PanelBody,
    SelectControl,
} = wp.components;


registerBlockType("qform/block", {
    apiVersion: 2,
    title: "Qform",
    category: "text",
    icon: {
        src: <svg xmlns="http://www.w3.org/2000/svg" width="125" height="32" viewBox="0 0 125 32" fill="none">
            <path
                d="M43.1846 3.34814C36.6447 3.34814 34.3047 5.77812 34.3047 14.0881C34.3047 22.398 36.6447 24.828 43.1846 24.828C49.7246 24.828 52.0346 22.398 52.0346 14.0881C52.0346 5.77812 49.7246 3.34814 43.1846 3.34814ZM43.1846 7.03812C46.3046 7.03812 47.2346 8.59811 47.2346 14.0881C47.2346 19.578 46.3046 21.138 43.1846 21.138C40.0646 21.138 39.1347 19.578 39.1347 14.0881C39.1347 8.59811 40.0646 7.03812 43.1846 7.03812ZM40.6046 27.918C42.9146 29.298 45.7946 30.7079 49.3946 31.6079L50.6846 27.528C47.3246 27.048 44.4146 26.448 41.6846 25.488L40.6046 27.918Z"
                fill="#1C4154"/>
            <path
                d="M69.1208 7.33811L69.3608 3.97814C66.6609 3.64814 63.1809 3.64814 60.0609 3.64814C57.3009 3.64814 55.5009 5.26813 55.5009 7.93811V24.438H60.0909V15.7381H68.0108V12.4081H60.0909V8.8681C60.0909 7.78811 60.5409 7.33811 61.7109 7.33811H69.1208Z"
                fill="#1C4154"/>
            <path
                d="M78.4233 9.2281C72.8734 9.2281 70.8034 11.3581 70.8034 17.058C70.8034 22.728 72.8734 24.828 78.4233 24.828C83.9433 24.828 86.0133 22.728 86.0133 17.058C86.0133 11.3581 83.9433 9.2281 78.4233 9.2281ZM78.4233 12.5581C80.7033 12.5581 81.3633 13.4581 81.3633 17.058C81.3633 20.598 80.7033 21.498 78.4233 21.498C76.0834 21.498 75.4534 20.598 75.4534 17.058C75.4534 13.4581 76.0834 12.5581 78.4233 12.5581Z"
                fill="#1C4154"/>
            <path
                d="M99.6606 9.2281H98.8806C96.9606 9.2281 94.8606 10.1581 92.8807 11.8381L92.4907 9.6481H89.0407V24.438H93.4807V14.3581C95.4906 13.6681 96.7206 13.3381 98.0106 13.3381H99.2106L99.6606 9.2281Z"
                fill="#1C4154"/>
            <path
                d="M120.475 9.2281C118.495 9.2281 116.815 10.0081 115.075 11.6281C114.535 10.0381 113.245 9.2281 111.265 9.2281C109.195 9.2281 107.485 10.1281 105.625 11.8081L105.325 9.6481H101.785V24.438H106.195V14.2681C107.815 13.2781 108.505 12.9781 109.465 12.9781C110.575 12.9781 111.055 13.3981 111.055 14.7181V24.438H115.315V14.2981C116.935 13.3081 117.625 12.9781 118.615 12.9781C119.815 12.9781 120.175 13.4581 120.175 14.7181V24.438H124.585V13.3381C124.585 10.6681 123.145 9.2281 120.475 9.2281Z"
                fill="#1C4154"/>
            <path
                d="M0 4.49999C0 2.01471 2.23857 0 4.99998 0H24.9999C27.7613 0 29.9999 2.01471 29.9999 4.49999V25.4999C29.9999 27.9852 27.7613 29.9999 24.9999 29.9999H4.99998C2.23857 29.9999 0 27.9852 0 25.4999V4.49999Z"
                fill="#1C4154"/>
            <path
                d="M2.63281 7.19323C2.63281 4.67404 4.86067 2.63184 7.60887 2.63184H25.0251C27.7733 2.63184 30.0011 4.67404 30.0011 7.19323V25.4388C30.0011 27.958 27.7733 30.0002 25.0251 30.0002H7.60887C4.86067 30.0002 2.63281 27.958 2.63281 25.4388V7.19323Z"
                fill="url(#paint0_linear)"/>
            <path
                d="M13.83 15.3797L10.9186 16.3291L13.83 17.2679V18.7658L9.30469 17.0675V15.5907L13.83 13.8924V15.3797Z"
                fill="white"/>
            <path d="M16.8653 21.2975H15.5256V11.2764H16.8653V21.2975Z" fill="white"/>
            <path
                d="M23.0526 15.5907V17.0675L18.5589 18.7658V17.2679L21.4386 16.3291L18.5589 15.3797V13.8924L23.0526 15.5907Z"
                fill="white"/>
            <defs>
                <linearGradient id="paint0_linear" x1="31.0538" y1="25.2634" x2="9.31134" y2="-1.52035"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#99DD11"/>
                    <stop offset="1" stop-color="#0CC863"/>
                </linearGradient>
            </defs>
        </svg>,
    },
    supports: {},
    attributes: {
        quantity: {
            type: "number",
            default: 6,
        },
        formId: {
            type: 'string',
            default: ''
        },
        formName: {
            type: 'string',
            default: ''
        },

    },

    edit: (props) => {
        const blockProps = useBlockProps({
            className: classnames("qform-block"),
        });
        const {
            attributes: {formId, formName},
            setAttributes,
        } = props;


        async function setForm(event) {
            const selected = event.target.querySelector('option:checked');
            await setAttributes({formId: selected.value});
            await setAttributes({formName: selected.textContent});
            window.QFormOrganizer._rebuildForms()
            event.preventDefault();
        }

        const [events, setEvents] = useState([])

        useEffect(() => {
            let bodyFormData = new FormData();
            bodyFormData.append('action', 'qform_gutenberg');
            bodyFormData.append('qform_nonce', QFORM_SECURITY.nonce);

            axios({
                method: 'post',
                url: ajaxurl,
                data: bodyFormData,
                headers: {"Content-Type": "multipart/form-data"},
            })
                .then(function (response) {
                    setEvents(response.data)
                })
                .catch(function (error) {

                });
        }, [])


        return (
            <>
                <div {...blockProps}>
                    <span className={"qform-picture"}></span>
                    { events &&
                    <p>{QFORM_LANG.formChoose}</p>
                    }
                    <div className={props.className}>
                        { events &&
                        <form onSubmit={setForm}>
                            <select>
                                {events?.map(
                                    (item) => (
                                        <option value={item.formId}>{item.name}</option>
                                    )
                                )}
                            </select>
                            <button onSubmit={setForm}>{QFORM_LANG.add}</button>
                        </form>
                    }
                        <div><a id={"wp-block-qform-block-a"} href={"https://help.qform.io/"}
                                target={"_blank"}>{QFORM_LANG.createForm}</a></div>
                    </div>
                    <div className="block-editor-block-list__block wp-block">
                        <div data-formid={formId}></div>
                    </div>
                </div>
            </>

        )
    },
    save: () => {
        return null;
    },
});
