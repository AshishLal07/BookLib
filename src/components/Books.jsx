import React, { useState } from 'react';

const BookList = () => {
	const [books, setBooks] = useState([]);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [yearPublished, setYearPublished] = useState('');
	const [isbn, setIsbn] = useState('');
	const [editIndex, setEditIndex] = useState(-1);

	const addBook = () => {
		const newBook = {
			title: title,
			author: author,
			yearPublished: yearPublished,
			isbn: isbn,
		};

		if (editIndex === -1) {
			setBooks([...books, newBook]);
		} else {
			const updatedBooks = [...books];
			updatedBooks[editIndex] = newBook;
			setBooks(updatedBooks);
			setEditIndex(-1);
		}

		setTitle('');
		setAuthor('');
		setYearPublished('');
		setIsbn('');
	};

	const editBook = (index) => {
		const book = books[index];
		setTitle(book.title);
		setAuthor(book.author);
		setYearPublished(book.yearPublished);
		setIsbn(book.isbn);
		setEditIndex(index);
	};

	const deleteBook = (index) => {
		const updatedBooks = [...books];
		updatedBooks.splice(index, 1);
		setBooks(updatedBooks);
	};

	return (
		<div className="m-auto h-full w-2/4  p-8 ">
			<p className="text-center text-3xl font-bold">Book List</p>

			<div className="flex flex-col my-2">
				<div>
					<label className="block">Title</label>
					<input
						className="border-2 border-black px-2 w-full my-2"
						type="text"
						placeholder="Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div>
					<label className="block">Author</label>
					<input
						className="border-2 border-black px-2 w-full my-2"
						type="text"
						placeholder="Author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<div>
					<label className="block">Year published</label>
					<input
						className="border-2 border-black px-2 my-2 w-full "
						type="text"
						placeholder="Year Published"
						value={yearPublished}
						onChange={(e) => setYearPublished(e.target.value)}
					/>
				</div>
				<div>
					<label className="block">ISBN</label>
					<input
						className="border-2 border-black px-2 my-2 w-full"
						type="text"
						placeholder="ISBN"
						value={isbn}
						onChange={(e) => setIsbn(e.target.value)}
					/>
				</div>

				<button
					className="bg-black text-white  p-2 rounded-md my-5"
					onClick={addBook}
				>
					{editIndex === -1 ? 'Add Book' : 'Update Book'}
				</button>
			</div>

			<p className=" text-left text-sm m-1 text-slate-300">
				Total books {books.length}
			</p>

			<ul className="t max-h-72 overflow-y-scroll">
				{books.map((book, index) => (
					<li
						className="my-2 bg-gray-100 p-2 border-l-8  border-green-500 flex flex-col "
						key={index}
					>
						<span>Title: {book.title}</span>
						<span>Author: {book.author}</span>
						<span>Year Published: {book.yearPublished}</span>
						<span>ISBN: {book.isbn}</span>

						<div className="grid gap-4 grid-cols-2  ">
							<button
								className="  bg-orange-400   bg-w "
								onClick={() => editBook(index)}
							>
								Edit
							</button>
							<button
								className="  bg-red-400 bg-w "
								onClick={() => deleteBook(index)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BookList;
