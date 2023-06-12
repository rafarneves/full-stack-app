export default function getError(err: Error | any) {
    let message = err.message || String(err);
    return message
}