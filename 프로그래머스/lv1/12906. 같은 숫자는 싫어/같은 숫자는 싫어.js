function solution(arr)
{
    var answer = [];
    //head를 배열의 첫번째요소로 만들고 다음거랑비교
    let head = arr[0];
    answer.push(head);
    for(let i=1;i<arr.length;i++){
        if(head !== arr[i]){
            answer.push(arr[i])
            head = arr[i]
        }
        
    }
    
    
    return answer;
}