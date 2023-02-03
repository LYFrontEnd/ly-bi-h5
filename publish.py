#!/usr/bin/env python

import shutil, git


def copytree(source, destination):
    """将source路径下整个文件夹，包括里面到子文件夹和文件复制到destination路径下

    Args:
        source (string): 源文件夹
        destination (string): 目标文件夹
    """
    shutil.copytree(source, destination, False, None, shutil.copy2, False,
                    True)


print("开始copy资源到发布仓库...")
copytree("dist", "../bilibili")
print("copy完成...")
print("开始提交代码...")
repo = git.Repo.init(path='../bilibili')
repo.git.add("-A")
repo.git.commit("-m", "自动化新版本发布")
repo.git.pull()
repo.git.push()
print("提交完成...")
print("部署完成，请等待github构建完成后检查网页...")