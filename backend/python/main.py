"""
Initial exploratory data analysis. Creates an html file with a summary of data_group0 data.
"""

if __name__ == '__main__':
    import json

    f = open("C:/Users/Josef/Documents/BCIT/QDS Hacks/BCIT Share/data_group0.json")
    data = json.load(f)

    import pandas as pd

    df0 = pd.DataFrame(data)
    pd.set_option('display.max_columns', None)
    pd.set_option('display.width', 1000)

    print(df0.describe().T)

    from pandas_profiling import ProfileReport
    prof = ProfileReport(df0)
    prof.to_file(output_file='output.html')

    # import os
    # import pandas as pd
    # import json
    #
    #
    # def load_data(path, identity='.json'):
    #     """
    #     load all matched files in one folder and concat them together.
    #     """
    #     files = os.listdir(path)
    #     df = pd.DataFrame()
    #     for file in files[:]:
    #         if identity in file:
    #             data = json.load(open(path + file))
    #             temp_df = pd.DataFrame(data)
    #             df = pd.concat([df, temp_df])
    #     return df
    #
    #
    # PATH = "C:/Users/Josef/Documents/BCIT/QDS Hacks/BCIT Share/"
    # df = load_data(PATH, identity='.json')
    #
    # # convert int to datetime
    # df.loc[:, "TIMESTAMP"] = pd.to_datetime(df['TIMESTAMP'], unit='ms')
    # # sort by the timestamp
    # df.sort_values('TIMESTAMP', inplace=True)