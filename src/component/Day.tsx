import day from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'


day.extend(weekOfYear)
const timeRule = (string: string) => {
    const now = day();
    if (day(string).isSame(now, 'day')) {
        return '今天';
    } else if (day(string).isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
    } else if (day(string).isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
    } else if (day(string).isSame(now, 'year')) {
        return day(string).format('M月D日');
    } else {
        return day(string).format('YYYY年M月D日');
    }
}
const weekRule = (string: string) => {
    switch (string) {
        case 'Monday':
            return '星期一'
        case 'Tuesday':
            return '星期二'
        case 'Wednesday':
            return '星期三'
        case 'Thursday':
            return '星期四'
        case 'Friday':
            return '星期五'
        case 'Saturday':
            return '星期六'
        case 'Sunday':
            return '星期日'
        default:
            return ''

    }
}

export {day, timeRule, weekRule}