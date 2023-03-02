import { Menu, Layout, MenuProps } from 'antd';
import { useAppDispatch, useAppSelector } from '@src/hook'
import { load as loadUserInfo, signOut } from "@store/user"
import { useEffect, CSSProperties } from 'react';
import { UserOutlined, LogoutOutlined } from "@ant-design/icons"
const { Header } = Layout;
const { SubMenu } = Menu;

export default function TopNav() {
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector((state) => { return state.User.info })
    // useEffect(() => {
    //     dispatch(loadUserInfo())
    // }, [dispatch])

    const menuClick = function (item: any) {
        switch (item.key) {
            case "signOut":
                dispatch(signOut())
                break
            default:
        }
    }
    const cssStyle: CSSProperties = {
        "color": "#ee6501",
        "fontWeight": "bold",
        "fontSize": "1.5em"
    }
    const items: MenuProps["items"] = [
        {
            key: "sub1",
            label: <span><UserOutlined /><span>{userInfo.username || "未登录"}</span></span>,
            children: [
                {
                    label: "退出系统",
                    key: "signOut"
                }
            ]

        }
    ]
    return (
        <Header className="header" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={cssStyle}>xxxxxx</span>
            <Menu
                mode="horizontal"
                onClick={(item: any) => { menuClick(item) }}
                items={items}
            >
            </Menu>
        </Header>
    )
}