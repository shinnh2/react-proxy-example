import React from "react";

const DisplayBoard = ({
	numberOfBooks,
	numberOfTodos,
	getAllBook,
	getAllTodo,
}) => {
	return (
		<div className="display-wrapper">
			<div className="display-box">
				<div className="display-board">
					<h4 className="display_title">생성된 book수</h4>
					<div className="number">{numberOfBooks}권</div>
					<h4 className="display_title">생성된 todo수</h4>
					<div className="number">{numberOfTodos}개</div>
				</div>
				<div className="get-button">
					<button onClick={() => getAllBook()}>Get all Books</button>
				</div>
				<div className="get-button">
					<button onClick={() => getAllTodo()}>Get all Todos</button>
				</div>
			</div>
		</div>
	);
};

export default DisplayBoard;
