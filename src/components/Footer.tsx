import Layout from "./Layout";

export default function Footer() {
    return (
            <footer className="md:flex hidden w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
                <Layout className="!py-8 flex items-center justify-between dark:!bg-dark">
                    <span> Cristopher Morales / {new Date().getFullYear()} &copy; All rights reserved.</span>
                </Layout>
            </footer>
    )
}