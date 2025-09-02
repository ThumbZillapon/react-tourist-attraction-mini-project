import axios from "axios"
import { useState, useEffect } from "react";
import "./SearchPage.css";
import brokenLinkIcon from "../assets/broken-link-10497.svg";

function SearchPage (){
	const [text, setText] = useState("");
	const [list, setList] = useState([]);
	const [copiedId, setCopiedId] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		setIsLoading(true);
		setError(null);
		try {
			const result = await axios.get(`http://localhost:4001/trips?keywords=${text}`);
			setList(result.data.data);
		} catch (err) {
			setList([]);
			setError("ไม่สามารถโหลดข้อมูลได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองอีกครั้ง");
		} finally {
			setIsLoading(false);
		}
	};

	const HandleSearch = (event) => {
		const value = event.target.value;
		setText(value)
	};

	const handleClick = (text) => {
		setText(text);
	};

	const handleCopyLink = async (url, id) => {
		try {
			await navigator.clipboard.writeText(url);
			setCopiedId(id);
			setTimeout(() => setCopiedId(null), 1500);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	useEffect(() => {
		const timerId = setTimeout(() => {
			getData();
		}, 300);
		return () => clearTimeout(timerId);
	}, [text]);

	return (
		<div className="App">
			<div className="app-wrapper">
				<h1 className="app-title">เที่ยวไหนดี</h1>
			</div>
			<div className="search-area">
				<p>ค้นหาที่เที่ยว</p>
				<input className="search-input" type="text" placeholder="หาที่เที่ยวแล้วไปกัน ..." value={text} onChange={HandleSearch} />
				{error && (
					<div className="error" role="alert">{error}</div>
				)}
			</div>
			<hr className="divider" />
			<div className="destination-list">
			{!error && list.map((item) => (
				<div key={item.eid} className="destination">
					<div>
						<img src={item.photos[0]} alt="destination-photo" />
					</div>
					<div className="detination-detail">
						<h2 className="title">{item.title}</h2>
						<p className="description">{item.description.substring(0, 100)}</p>
						<a className ="link" href={item.url} target="_blank" rel="noopener noreferrer">อ่านต่อ</a>
						{item.tags && item.tags.length > 0 && (
							<p className="tags">
								<span className="muted">หมวด: </span>
								{item.tags.map((tag, index) => (
									<span key={`${item.eid}-tag-${index}`}>
										<a href="#" onClick={(e) => { e.preventDefault(); handleClick(tag); }}>{tag}</a>
										{index < item.tags.length - 2 ? <span className="muted">, </span> : index === item.tags.length - 2 ? <span className="muted"> และ </span> : ""}
									</span>
								))}
							</p>
						)}
						<div className="destination-photo-more">
							{item.photos.slice(1, 4).map((photos, index) => (
								<img
									className="more-destination-photos"
									key={index}
									src={photos}
									alt=""
								/>
							))}
						</div>
					</div>
					<div className="destination-actions">
						<button type="button" className="ext-link" onClick={() => handleCopyLink(item.url, item.eid)} aria-label="copy link">
							<img src={brokenLinkIcon} alt="copy link" width="40" height="40" />
						</button>
						{copiedId === item.eid && (
							<div className="copy-feedback" aria-live="polite">copy link to clipboard</div>
						)}
					</div>
				</div>
			))}
			</div>

			
				
			
		</div>
	);
};

export default SearchPage;