import { useEffect, useState } from 'react';
import { Menu, Layout, MenuProps } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface'
import { useAppSelector } from '@src/hook';
import { UserOutlined, LaptopOutlined, CoffeeOutlined, SearchOutlined } from '@ant-design/icons';

import { useLocation, useNavigate, Link } from 'react-router-dom';

const { Sider } = Layout;

export default function LeftSideNav() {
    const location = useLocation()
    const user = useAppSelector((state) => { return state.User.info })
    let navigate = useNavigate();
    const menuClick: MenuClickEventHandler = function ({ key }) {
        console.log(key);
        const targetPath = `/home/${key}`
        console.log(targetPath);
        if (targetPath !== location.pathname) {
            navigate(`/home/${key}`)
        }
    }

    const [currentKey, setCurrentKey] = useState("")

    useEffect(() => {
        let key = location.pathname.replace("/home/", "")
        setCurrentKey(key)
    }, [location])
    const items: MenuProps["items"] = [
        {
            key: "x1123rt",
            icon: <SearchOutlined />,
            label: <span>xxx</span>
        },
        {
            key: "x1rt",
            icon: <UserOutlined />,
            label: <span>xxx</span>,
            children: [
                {
                    key: "xxxx",
                    label: <span>xxx</span>
                }
            ]
        }
    ]
    return (
        <Sider width={200} style={{ background: '#fff' }}>
            <Menu
                mode="inline"
                selectedKeys={[currentKey]}
                defaultOpenKeys={[]}
                style={{ height: '100%', borderRight: 0 }}
                onClick={menuClick}
                items={items}
            >
            </Menu>
        </Sider>
    )
}