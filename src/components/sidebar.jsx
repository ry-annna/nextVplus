"use client";

import { Sidebar } from "flowbite-react";

import { FaRegChartBar } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { PiLightbulbBold } from "react-icons/pi";
import { MdOutlineMapsHomeWork } from "react-icons/md";

export default function MultiLevelDropdown() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse label="Trading" icon={FaRegChartBar}>
            <Sidebar.Item href="/mulai-trading">Mulai Trading</Sidebar.Item>
            <Sidebar.Item href="/produk-trading">Produk Trading</Sidebar.Item>
            <Sidebar.Item href="/platform-trading">
              Platform Trading
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse label="Market" icon={IoNewspaperOutline}>
            <Sidebar.Item href="/berita">Berita</Sidebar.Item>
            <Sidebar.Item href="#">Analisa</Sidebar.Item>
            <Sidebar.Item href="/kalender-ekonomi">
              Kalender Ekonomi
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse label="Edukasi" icon={PiLightbulbBold}>
            <Sidebar.Item href="#">Pemula</Sidebar.Item>
            <Sidebar.Item href="#">Mahir</Sidebar.Item>
            <Sidebar.Item href="#">Webinar Vplus</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse label="Company" icon={MdOutlineMapsHomeWork}>
            <Sidebar.Item href="/profil-vplus">Profil Vplus</Sidebar.Item>
            <Sidebar.Item href="#">Kontak Vplus</Sidebar.Item>
            <Sidebar.Item href="#">Tanya Jawab Vplus</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/karir">
            <p>VCareer</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
