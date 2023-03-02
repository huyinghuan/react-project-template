import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import LeftSideNav from "@components/left-side-nav"
import TopNav from "@components/top-nav"

const { Content, Footer } = Layout;
export default function Home() {
    return (
        <Layout style={{ height: "100vh" }}>
            <TopNav />
            <Layout>
                <LeftSideNav />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
            <Footer></Footer>
        </Layout>
    )
}