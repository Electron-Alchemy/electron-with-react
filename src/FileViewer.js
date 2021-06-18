import 'bootstrap/dist/css/bootstrap.min.css'

export const FileViewer = ({ files, onBack, onOpen }) => {
    <table class="table">
        <tbody>
            <tr className="clickable" onClick={onBack}>
                <td className="icon-row"> <i class="icon-folder-open"></i> </td>
                <td>...</td>
                <td></td>
            </tr>

            {files.map(({ name, directory, size}) => {
                    return (
                        <tr className="clickable" onClick={() => directory && onOpen(name)}>
                            <td className="icon-row">
                                {directory ? <i class="icon-folder"></i> : <i class="icon-file"></i>}
                            </td>

                            <td>{name}</td>

                            <td>
                                <span className="float-end">{size}</span>
                            </td>
                        </tr>
                    )
                })

            }
        </tbody>
    </table>
}