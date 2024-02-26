
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";

const Totoro = () => {
    return (

        <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="Feed/*" element={<Feed />} />
                    <Route path="Library/*" element={<Library />} />
                    <Route path="Playlist/*" element={<Playlist />} />
                    <Route path="Profile/:targetID/*" element={<Mypage />} />
                    <Route path="Mypage/*" element={<Editpage />} />
                    <Route path="Register/*" element={<Register />} />
                    <Route path="Login/*" element={<Login />} />
                    <Route path="Upload/*" element={<Upload_Main />} />
                    <Route path="Report/*" element={<Report />} />
                    <Route path="Admin/*" element={<Admin />} />
                    <Route path="Announce/*" element={<AnnounceList />} />
                    <Route path="Detail/:trackId/*" element={<Track_Detail />} />
                    <Route path="/Album/Detail/*" element={<MyAlbumDetail />} />
                    <Route path="ShowMusicList/:searchText/*" element={<ShowMusicList />} />
                    <Route path="QnA/*" element={<QnaList />} />
                    <Route path="Dashboard/*" element={<DashBoardMain />} /> */}
        </Routes>
    );
};

export default Totoro;