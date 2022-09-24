// 定义转义 html 的方法
// < > "" & 符号转换成实体字符

function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g, (match)=>{
        switch(match){
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;';
        }
    });
}

// 暴露方法
module.exports = {
    htmlEscape
}