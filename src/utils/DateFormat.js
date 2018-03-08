import Moment from 'moment';

export function formatDateSmall(date) {
    return Moment(date).format('MMM Do YYYY');
}
export function formatDateSmallWithTime(date) {
    return Moment(date).format('MMM Do YYYY, h:mm a');
}
export function dateTransformer(dateString) {
    if (dateString) {
        return Moment(dateString);
    }
    return null;
}
