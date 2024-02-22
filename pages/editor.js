import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';

export default function Editors() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const handleOpenFlmngr = async (test) => {
        const Flmngr = require("@flmngr/flmngr-react").default;
        if (Flmngr) {
            Flmngr.open({
                apiKey: "WrYOVz2j",
                urlFileManager: "https://files.redliodesigns.com/flmngr",
                urlFiles: "https://files.redliodesigns.com/files",
                isMultiple: false,
                acceptExtensions: ["png", "jpg", "jpeg", "gif", "webp"],
                onFinish: (files) => {
                    editorRef.current.insertContent(`<img src='${files[0].url}' />`)
                },
            });
        }
    }

    return (
        <>
            <Editor
                apiKey='ug1wqqg3fqn3g407nylwz3jl7p2oiqpvhum0vr6kbvlsyhrx'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: true,
                    menubar: "file edit view insert format tools table",
                    plugins: "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen link media template codesample table charmap pagebreak nonbreaking insertdatetime advlist lists wordcount help charmap emoticons",
                    toolbar: "undo redo | formatselect | bold italic |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | flmngr",
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    setup: editor => {
                        editor.ui.registry.addButton('flmngr', {
                            text: 'Upload Image',
                            onAction: handleOpenFlmngr
                        });
                    }
                }}
            />
        </>
    );
}