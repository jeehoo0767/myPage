import React from 'react';

type GreetingsProps = {
    name : string;
    mark : string;
    optional? : string; //있어도 되고 없어도 되는 props라면 키값 뒤에 ? 를 붙인다
    onClick : (name : string) => void;
};


// const Greetings: React.FC<GreetingsProps> = ({ name, mark }) => (
//     <div>
//       Hello, {name} {mark}
//     </div>
//   );
// React.Fc는 defaultProps가 제대로 작동하지 않음


const Greetings = ({name, mark, optional, onClick} : GreetingsProps) => {
    const handleClick = () => onClick(name);

    return(
    <div>
        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
        <button onClick={handleClick}>Click me</button>
    </div>
    )
    };

export default Greetings


